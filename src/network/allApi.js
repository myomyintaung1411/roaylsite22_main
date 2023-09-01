import network from './index.js'

export default {
    getDataInfo() {
        // console.log('data ... ', data)
        return network({
            url: 'reqddr',
            method: 'get',
        })
    },
}
