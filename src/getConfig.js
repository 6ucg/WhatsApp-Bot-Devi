import 'dotenv/config'
const getConfig = () => {
    return {
        name: process.env.NAME || 'Baron',
        session: process.env.SESSION || 'Guru_b081f575-7229-4cb1-b5ed-94f037d5ee3d',
        prefix: process.env.PREFIX || '.',
        port: process.env.PORT || 8080,
        imgbb: process.env.IMGBB, '38154ac1bb3a6b37827c1ab5623e9de8',
        mongo: process.env.MONGO || 'mongodb+srv://schwarzebaron:<Baronbaron00>@cluster404.q09gey9.mongodb.net/?retryWrites=true&w=majority',
        mods: process.env.MODS
            ? process.env.MODS.split(',').map((id) => {
                  if (id.endsWith('@s.whatsapp.net')) return id
                  return id.replace('+', '').concat('@s.whatsapp.net')
              })
            : []
    }
}

export default getConfig



NAME=baron
PREFIX=.
SESSION=Guru_b081f575-7229-4cb1-b5ed-94f037d5ee3d
PORT=8080
IMGBB=38154ac1bb3a6b37827c1ab5623e9de8
MONGO=mongodb+srv://schwarzebaron:<password>@cluster404.q09gey9.mongodb.net/?retryWrites=true&w=majority
MODS=['16023344194']
