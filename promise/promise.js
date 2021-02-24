function noop() {}

class MyroslavPromise {
    constructor(executor) {
        this.queue = []
        this.errorHandler = noop
        this.finallyHandler = noop

        try  {
            executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
        } catch (e) {
            this.errorHandler(e)
        } finally {
            this.finallyHandler()
        }
    }

    onResolve(data) {
        this.queue.forEach(cb => {
            data = cb(data)
        })

        this.finallyHandler()
    }
    
    onReject(err) {
        this.errorHandler(err)

        this.finallyHandler()
    }

    then(fn) {
        this.queue.push(fn)
        return this
    }

    catch(fn) {
        this.errorHandler = fn
        return this
    }

    finally(fn) {
        this.finallyHandler = fn
        return this
    }
}

const promise = new MyroslavPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('NgRx')
    }, 150);
})

promise.then(course => course.toUpperCase())
       .then(title => console.log('Myroslav Promise', title))
       .catch(err => console.log(err))
       .finally(() => console.log('Finally'))



module.exports = MyroslavPromise