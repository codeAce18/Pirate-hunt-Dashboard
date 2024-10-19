import ActivePlayersBar from "./ActivePlayersBar";
import ActivePlayersChart from "./ActivePlayersChart";
import ActivePlayersPie from "./ActivePlayersPie";
import LeaderBoard from "./LeaderBoard";



const ChartsContent = () => {
    return (
        <>


            <LeaderBoard />

            <div className="pt-[10px]">
                <ActivePlayersChart />
            </div>

            <div className="pt-[10px] flex  gap-[10px]">
                <ActivePlayersPie />

                <ActivePlayersBar />
            </div>
        
        
        
        </>
    )
}

export default ChartsContent;