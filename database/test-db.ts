import { connectToDatabase } from './mongoose'

(async () => {
    try {
        await connectToDatabase()
        console.log('db connected!')
        process.exit(0)
    } catch (e) {
        console.error('failed to connect', e)
        process.exit(1)
    }
})()