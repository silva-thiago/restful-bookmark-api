import { Injectable } from "@nestjs/common"

@Injectable({})
export class AuthService {
  signup() {
    return { message: 'You have signed up' }
  }

  signin() {
    return { message: 'You have signed in' }
  }
}
