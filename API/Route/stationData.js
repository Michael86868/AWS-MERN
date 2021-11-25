module.exports = app => {
    const stationData = require('../Controller/StationData.js')
    const router = require('express').Router();

    router.post('/', stationData.create);
    router.get('/', stationData.findAll);
    router.get('/:id', stationData.findOne);
    router.put('/:id', stationData.update);
    router.delete('/:id', stationData.delete);

    app.use('/api/station-data/', router)
}
