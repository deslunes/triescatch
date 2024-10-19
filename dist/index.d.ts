interface TriesResult<T> {
    data: T;
    catch: (errorType: new (...args: any[]) => Error, catchCallback: (error: Error, data: T) => void) => TriesResult<T>;
}
declare function tries<T = Record<string, any>>(callback: (data: T) => void | undefined): TriesResult<T>;

export { tries as test, tries };
