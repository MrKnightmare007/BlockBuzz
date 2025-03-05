import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { userSchema } from '../schemaTypes/userSchema'
import { tweetSchema } from '../schemaTypes/tweetSchema'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([userSchema, tweetSchema]),
})