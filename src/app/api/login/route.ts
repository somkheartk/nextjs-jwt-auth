import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'default_secret';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // ปรับตามระบบจริง
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

    const response = NextResponse.json({ message: 'Login success' });
    response.cookies.set('token', token, {
      httpOnly: true,
      maxAge: 60 * 60,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
