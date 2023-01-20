import { Model } from 'pinia-orm'
import { Str,Uid } from 'pinia-orm/dist/decorators'

export default class Location extends Model {

  static entity = 'locations'

  @Uid(null) declare id: number | null
  @Str('') declare a1: string
  @Str('') declare a2: string
  @Str('') declare a3: string
  @Str('') declare a4: string
  @Str('') declare a5: string
  @Str('') declare a6: string
  @Str('') declare a7: string
  @Str('') declare a8: string
  @Str('') declare a10: string
  @Str('') declare a11: string
  @Str('') declare a12: string
  @Str('') declare a13: string
  @Str('') declare a14: string
  @Str('') declare a15: string
  @Str('') declare a16: string
  @Str('') declare a17: string
  @Str('') declare a18: string
  @Str('') declare a19: string
  @Str('') declare a20: string
  @Str('') declare a21: string
  @Str('') declare a22: string
  @Str('') declare a23: string
  @Str('') declare a24: string
  @Str('') declare a25: string
  @Str('') declare a26: string
  @Str('') declare a27: string
  @Str('') declare a28: string
  @Str('') declare a29: string
  @Str('') declare a30: string
}