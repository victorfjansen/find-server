import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './shared/filters';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
}
bootstrap();
