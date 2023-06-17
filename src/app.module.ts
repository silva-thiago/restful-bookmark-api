import { Module } from '@nestjs/common'
import { DevtoolsModule } from '@nestjs/devtools-integration'

import { AuthModule } from './auth/auth.module'
import { BookmarkModule } from './bookmark/BookmarkModule'
import { UserModule } from './user/UserModule'

@Module({
	imports: [
		DevtoolsModule.register({
			http: process.env.NODE_ENV !== 'production'
		}),
		AuthModule,
		BookmarkModule,
		UserModule
	],
})
export class AppModule {}
