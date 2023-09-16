import crashlytics from '@react-native-firebase/crashlytics';

/**
 * this hook helps you to send error messages to trace monitorin application such as google crashlytics
 * @returns 
 */
export function useErrorTrace() {
    /**
     * This function accualy send the error message
     * @param err Error object
     * @param errorName string represtns the error name
     */
    const setError = (err: Error, errorName: string) => {
        crashlytics().recordError(err, errorName);
        console.log(err);
    }

    return {setError};
}