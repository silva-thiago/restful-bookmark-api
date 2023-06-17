import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule, {
		snapshot: true
	})
	await app.listen(3000)
}
bootstrap()
