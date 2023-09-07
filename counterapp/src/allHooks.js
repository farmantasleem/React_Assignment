function useDebounce(cb,delay=200){
    let timerId;
    return (...args) => {
        console.log(...args);
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb();
        }, delay);
    }
}

export default useDebounce;