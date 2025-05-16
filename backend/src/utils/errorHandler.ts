import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = '服务器内部错误';

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Prisma 已知请求错误
    statusCode = 400;
    message = '数据库操作错误';
  } else if (err.name === 'ValidationError') {
    // 验证错误
    statusCode = 400;
    message = '输入数据验证失败';
  }

  console.error('Error caught by errorHandler:', err.stack);
  res.status(statusCode).json({ code: statusCode, message, error: err.message });
};