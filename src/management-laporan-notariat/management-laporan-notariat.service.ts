import { Injectable } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class ManagementLaporanNotariatService {
    private readonly proxy = createProxyMiddleware({
        target: process.env.MANAGEMENT_LAPORAN_NOTARIAT_HOST,
        changeOrigin: true,
    });

    use(req, res, next) {
        this.proxy(req, res, next);
    }
}
