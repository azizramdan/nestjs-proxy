import { Injectable } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class PengaturanAplikasiService {
    private readonly proxy = createProxyMiddleware({
        target: process.env.PENGATURAN_APLIKASI_HOST,
        changeOrigin: true,
    });

    use(req, res, next) {
        this.proxy(req, res, next);
    }
}
