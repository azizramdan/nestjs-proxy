import { Injectable } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class PengaturanAplikasi {
    private readonly pengaturanAplikasi = createProxyMiddleware({
        target: process.env.PENGATURAN_APLIKASI_HOST,
        changeOrigin: true,
    });

    use(req, res, next) {
        this.pengaturanAplikasi(req, res, next);
    }
}
