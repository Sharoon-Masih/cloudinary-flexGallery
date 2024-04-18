import SearchBar from '@/components/searchBar'
import React from 'react'
import Upload from '@/components/upload-btn'
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className=" px-4 py-4  text-gray-100 w-screen md:width height ">
            <div className='flex justify-between gap-7 lg:gap-0 items-center flex-col lg:justify-between lg:flex-row '>
                <div className='flex justify-center items-start gap-2 '>
                    <div className='text-4xl font-semibold'>Gallery</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 62.90714 54.94274" ><path d="M42.88497,50.81751h14.79833c1.18766,0,2.0122-.79297,2.4107-1.8354,4.5157-11.8127,3.51657-25.37614-2.43375-36.5004-.41083-.76805-1.30383-1.2382-2.15868-1.2382-16.03201,0-32.06402,0-48.09602,0-.85485,0-1.74785,.47015-2.15868,1.2382C-.70344,23.60597-1.70256,37.16943,2.81313,48.98211c.39875,1.04309,1.23421,1.8354,2.4107,1.8354H22.01373c3.21726,0,3.22259-5,0-5H5.22383l2.4107,1.8354c-4.04624-10.58463-3.42947-22.6285,1.92971-32.64761l-2.15868,1.2382c16.03201,0,32.06402,0,48.09602,0l-2.15868-1.2382c5.35916,10.01909,5.97591,22.06307,1.92971,32.64761l2.4107-1.8354h-14.79833c-3.21726,0-3.22259,5,0,5h0Z" fill="#1b1b90" origin="undraw" /><path d="M33.43254,54.7932c6.19355,.06703,12.05077-4.29842,13.65523-10.30993,1.58871-5.95251-.97046-12.44927-5.98417-15.92793-5.06329-3.51306-12.42112-3.47606-17.45337,.06498-5.28419,3.71833-8.05436,10.46324-5.8769,16.73721,2.25937,6.50998,9.53968,10.64696,16.3238,9.34637,1.32677-.25436,2.08348-1.84764,1.7461-3.0753-.38158-1.3885-1.7447-2.00119-3.0753-1.7461-3.62713,.69536-8.21181-1.71024-9.84618-5.07725-1.85965-3.8311-.68426-8.28596,2.35232-11.11727,3.08665-2.87798,7.90824-3.58174,11.71398-1.74853,3.72847,1.796,5.97263,5.85271,5.52174,9.97907-.48994,4.48368-4.63784,7.92272-9.07726,7.87467-3.21838-.03483-3.22071,4.96514,0,5h0Z" fill="#FFFFFF" /><path d="M47.20931,41.71487c3.41931-7.83166,1.38744-17.71082-6.51071-21.93267-7.98596-4.26879-18.15554-1.78062-23.0377,5.9137-2.96279,4.66938-3.06582,10.5142-.74994,15.4532,.57319,1.22243,2.33038,1.53448,3.42047,.89688,1.25256-.73263,1.47222-2.19347,.89688-3.42047-2.86917-6.119,.87959-13.30923,7.10294-15.35031,5.53112-1.81405,12.7463,.48973,14.76968,6.3247,1.05121,3.03144,1.08958,6.61715-.20897,9.59138-.53982,1.2364-.36379,2.68311,.89688,3.42047,1.05906,.61944,2.87739,.34702,3.42047-.89688h0Z" fill="#FFFFFF" /><path d="M13.52588,13.06085c-.22144-.60959-.43127-1.21751-.52395-1.86187l.0893,.6646c-.03078-.29071-.03508-.57237-.00556-.86357l-.0893,.6646c.02056-.13914,.06048-.27483,.08159-.41293,.08202-.24967,.04602-.18102-.108,.20597l.06278-.12347c.30214-.38018-.44171,.36226-.06433,.06229,.38875-.30902-.51984,.30342-.08932,.05236,.11836-.06902,.23381-.13412,.35519-.19781,.43902-.23034-.56419,.19436-.08824,.04416,.28198-.08899,.56297-.17819,.84795-.25769,1.2957-.36146,2.61454-.63009,3.94645-.8167l-.6646,.0893c.61099-.08209,1.22334-.14684,1.83799-.19428l-2.5-2.5c.12812,1.93836,.25624,3.87672,.38436,5.81508,.08607,1.30224,1.08822,2.56323,2.5,2.5,1.28061-.05736,2.59237-1.1025,2.5-2.5-.12812-1.93836-.25624-3.87672-.38436-5.81508-.08381-1.26792-1.07972-2.60962-2.5-2.5-1.39395,.10758-2.78778,.29099-4.16014,.55887-1.13718,.22197-2.31513,.46813-3.39498,.89627-1.59201,.63121-2.94248,1.7331-3.33603,3.48735-.33453,1.49115-.02935,2.92458,.48181,4.33173,.22596,.62205,.5621,1.15069,1.1489,1.49408,.53587,.31358,1.32563,.44644,1.9264,.25202,1.20485-.38991,2.22414-1.7593,1.7461-3.0753h0Z" fill="#1b1b90" /><path d="M54.63649,11.24351c-2.98018-.3887-5.84343-2.18599-7.56148-4.63141-1.12721-1.60443-2.08581-3.256-3.69923-4.43331-1.40547-1.02557-3.08699-1.55219-4.79275-1.79859-3.60646-.52096-7.97862-.65784-11.44263,.581-1.77682,.63545-3.39358,1.62849-4.58046,3.11176-.5999,.74971-1.02661,1.57114-1.48354,2.40873-.3302,.60528-.59556,1.26666-1.30382,1.43449-3.12971,.74159-1.80471,5.56398,1.3292,4.8214,2.00209-.4744,3.34166-1.99024,4.29198-3.73228,.78315-1.43559,1.42997-2.54741,3.00779-3.19772,1.60492-.66148,3.40249-.67976,5.10836-.68944,1.61085-.00914,3.29764-.07656,4.87889,.27892,1.45336,.32673,2.46002,.95164,3.3272,2.17604,1.02054,1.44092,1.92305,2.92963,3.20666,4.16471,2.68927,2.58761,6.0474,4.02751,9.71383,4.50572,1.34117,.17493,2.5-1.27424,2.5-2.5,0-1.49622-1.15483-2.32455-2.5-2.5h0Z" fill="#1b1b90" /></svg>
                </div>
                <SearchBar />
                <Upload />
            </div>
            {children}
        </section>
    )
}

export default Layout