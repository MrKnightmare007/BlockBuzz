import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'


import {userSchema} from './schemas/userSchema'
import {tweetSchema} from './schemas/tweetSchema'

export default defineConfig({
  name: 'default',
  title: 'BlockBuzz',
  
  projectId: 'w4ltb6r7',
  dataset: 'production',
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: [userSchema, tweetSchema],
  },
})