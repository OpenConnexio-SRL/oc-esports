import { EnvelopeIcon } from '@heroicons/react/20/solid'

const teams = [
    {
        id: '32g4kjg2j3g4j2kg3k4gb',
        name: 'Fnatic',
        website: 'fnatic.com',
        region: 'EMEA',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        players: [
            {
                name: 'player1',
                nationality: 'Italian'
            },{
                name: 'player2',
                nationality: 'Italian'
            },{
                name: 'player3',
                nationality: 'Italian'
            },{
                name: 'player4',
                nationality: 'Italian'
            },{
                name: 'player5',
                nationality: 'Italian'
            }
        ]
    },{
        id: '32g4kjg2j3g4j2kg3k4gb',
        name: 'Fnatic',
        website: 'fnatic.com',
        region: 'EMEA',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        players: [
            {
                name: 'player1',
                nationality: 'Italian'
            },{
                name: 'player2',
                nationality: 'Italian'
            },{
                name: 'player3',
                nationality: 'Italian'
            },{
                name: 'player4',
                nationality: 'Italian'
            },{
                name: 'player5',
                nationality: 'Italian'
            }
        ]
    },{
        id: '32g4kjg2j3g4j2kg3k4gb',
        name: 'Fnatic',
        website: 'fnatic.com',
        region: 'EMEA',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        players: [
            {
                name: 'player1',
                nationality: 'Italian'
            },{
                name: 'player2',
                nationality: 'Italian'
            },{
                name: 'player3',
                nationality: 'Italian'
            },{
                name: 'player4',
                nationality: 'Italian'
            },{
                name: 'player5',
                nationality: 'Italian'
            }
        ]
    },{
        id: '32g4kjg2j3g4j2kg3k4gb',
        name: 'Fnatic',
        website: 'fnatic.com',
        region: 'EMEA',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        players: [
            {
                name: 'player1',
                nationality: 'Italian'
            },{
                name: 'player2',
                nationality: 'Italian'
            },{
                name: 'player3',
                nationality: 'Italian'
            },{
                name: 'player4',
                nationality: 'Italian'
            },{
                name: 'player5',
                nationality: 'Italian'
            }
        ]
    },{
        id: '32g4kjg2j3g4j2kg3k4gb',
        name: 'Fnatic',
        website: 'fnatic.com',
        region: 'EMEA',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        players: [
            {
                id: 'ddklgskdf',
                name: 'player1',
                nationality: 'Italian'
            },{
                id: 'ddksdsslgskdf',
                name: 'player2',
                nationality: 'Italian'
            },{
                id: 'ddker32lgskdf',
                name: 'player3',
                nationality: 'Italian'
            },{
                id: 'ddklwerewgskdf',
                name: 'player4',
                nationality: 'Italian'
            },{
                id: 'ddklg32r32erwskdf',
                name: 'player5',
                nationality: 'Italian'
            }
        ]
    },

]

const Teams = () => {
    return (

        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teams.map((team) => (
                <li
                    key={team.id}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                >
                    <div className="flex flex-1 flex-col p-8">
                        <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={team.imageUrl} alt="" />
                        <h3 className="mt-6 text-sm font-medium text-gray-900">{team.name}</h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-sm text-gray-500">{team.website}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                  {team.region}
                                </span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        {team.players.map((player) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className="-mt-px flex divide-x divide-gray-200" key={player.id}>
                                <div className="flex w-0 flex-1">
                                    <a
                                        href={`mailto:${player.name}`}
                                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                    >
                                        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">{player.name}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </li>
            ))}
        </ul>

    )
}

export default Teams;