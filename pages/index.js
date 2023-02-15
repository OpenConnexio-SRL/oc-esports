
import { Inter } from '@next/font/google'
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'


const inter = Inter({ subsets: ['latin'] })

const ongoingEvents = [
    {
        id: 1,
        title: 'OC World Championship',
        area: 'WORLD',
        location: 'Milan',
        type: 'World',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
    },
    {
        id: 2,
        title: 'OC Italian Championship',
        area: 'EU',
        location: 'On-Line',
        type: 'Regional',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
    },
    {
        id: 3,
        title: 'OC Streamer Championship',
        area: 'WORLD',
        location: 'On-Line',
        type: 'World',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
    },
]

export default function Home() {
  return (
    <>
        <div className="border-b border-gray-200 pb-5">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Ongoing Events</h3>
        </div>
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              {ongoingEvents.map((position) => (
                  <li key={position.id}>
                    <a href="#" className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="truncate text-sm font-medium text-indigo-600">{position.title}</p>
                          <div className="ml-2 flex flex-shrink-0">
                            <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {position.area}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              <UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                              {position.type}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                              {position.location}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <p>
                              Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
              ))}
            </ul>
        </div>
        <div className="border-b border-gray-200 pb-5">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Upcoming Events</h3>
        </div>
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {ongoingEvents.map((position) => (
                    <li key={position.id}>
                        <a href="#" className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <p className="truncate text-sm font-medium text-indigo-600">{position.title}</p>
                                    <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                            {position.area}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                            <UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            {position.type}
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            {position.location}
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <p>
                                            Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}
