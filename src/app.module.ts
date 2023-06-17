import { Module } from '@nestjs/common'
import { DevtoolsModule } from '@nestjs/devtools-integration'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	imports: [
		DevtoolsModule.register({
			http: process.env.NODE_ENV !== 'production'
		})
	],
})
export class AppModule {}
