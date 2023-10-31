import { Injectable } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class UserSettingService {
    private readonly userSettingProxy = createProxyMiddleware({
        target: process.env.USER_SETTING_HOST,
        changeOrigin: true,
    });

    use(req, res, next) {
        this.userSettingProxy(req, res, next);
    }
}
