import Image from "next/image";


const ConfirmCode = () => {
    return(
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Image
                        className="mx-auto h-12 w-auto"
                        src="/images/logos/primary.png"
                        alt="Your Company"
                        width={140}
                        height={50}
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Confirm your account</h2>
                    <h6 className="mt-6 text-center text-sm font-bold tracking-tight text-gray-900"> We have sent a confirm code to your email. Please check you email and insert code below</h6>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                                    Confirm code
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="code"
                                        name="code"
                                        type="text"
                                        autoComplete="code"
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Confirm account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmCode;