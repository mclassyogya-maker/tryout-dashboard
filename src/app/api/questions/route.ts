import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import jwt from 'jsonwebtoken';

function verifyToken(request: NextRequest) {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as any;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = verifyToken(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const result = await query(
      'SELECT * FROM questions ORDER BY created_at DESC'
    );

    return NextResponse.json({
      questions: result
    });

  } catch (error) {
    console.error('Get questions error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);
    
    if (!user || user.role !== 'teacher') {
      return NextResponse.json(
        { error: 'Hanya guru yang bisa membuat soal' },
        { status: 401 }
      );
    }

    const { question_text, options, correct_answer, category, difficulty = 'medium' } = await request.json();

    const result = await query(
      'INSERT INTO questions (question_text, options, correct_answer, category, difficulty, created_by) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [question_text, JSON.stringify(options), correct_answer, category, difficulty, user.userId]
    );

    return NextResponse.json({
      message: 'Soal berhasil dibuat',
      question: result[0]
    });

  } catch (error) {
    console.error('Create question error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
