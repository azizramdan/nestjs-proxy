import { Injectable } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class DataNotarisMiddleware {
  private readonly proxy = createProxyMiddleware({
    target: process.env.DATA_NOTARIS_HOST,
    changeOrigin: true,
    pathRewrite: {
      '^/gateway/api': '/api',
    },
  });

  use(req: Request, res: Response, next: NextFunction) {
    this.proxy(req, res, next);
  }
}
