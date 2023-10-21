import Banner from "../../component/Banner/Banner";
import CarItemList from "../../component/CarItemList/CarItemList";
import ExtraSection from "../../component/ExtraSection/ExtraSection";

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <CarItemList></CarItemList>
               <ExtraSection></ExtraSection>
          </div>
     );
};

export default Home;