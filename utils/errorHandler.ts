import {type PostgrestError} from '@supabase/postgrest-js'

class BaseError {
  code: number
  message: string

  constructor(code: number, message: string) {
    this.code = code
    this.message = message
  }
}

const errorHandler = (error: PostgrestError | never) => {
  const errorType = typeof error

  // if(error) {
  //   console.error(error)
  // }

  if (error.code) {
  }
}

export default errorHandler
