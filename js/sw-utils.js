function actualizaCacheDinamico(dynamicCAche, req, res) {

    if (res.ok) {
        return caches.open(dynamicCAche).then(cache => {

            cache.put(req, res.clone());

            return res.clone();

        });

    } else {

        return res;

    }

}