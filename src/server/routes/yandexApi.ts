import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router: Router = Router();

const yandexDomain = 'ya-praktikum.tech';

router.use(
  '/yandex-api',
  createProxyMiddleware({
    target: `https://${yandexDomain}/api/v2`,
    changeOrigin: true,
    pathRewrite: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '^/yandex-api': '',
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    logLevel: 'debug',
    cookieDomainRewrite: 'localhost',
  })
);

export default router;
