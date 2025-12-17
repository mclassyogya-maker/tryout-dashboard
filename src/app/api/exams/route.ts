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
      'SELECT * FROM exams ORDER BY created_at DESC'
    );

    return NextResponse.json({
      exams: result
    });

  } catch (error) {
    console.error('Get exams error:', error);
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
        { error: 'Hanya guru yang bisa membuat ujian' },
        { status: 401 }
      );
    }

    const { title, description, subject, duration, questions, passing_grade = 70 } = await request.json();

    const result = await query(
      'INSERT INTO exams (title, description, subject, duration, questions, passing_grade, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, description, subject, duration, JSON.stringify(questions), passing_grade, user.userId]
    );

    return NextResponse.json({
      message: 'Ujian berhasil dibuat',
      exam: result[0]
    });

  } catch (error) {
    console.error('Create exam error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
