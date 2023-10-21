import Banner from "../../component/Banner/Banner";
import CarItemList from "../../component/CarItemList/CarItemList";
import ExtraSection from "../../component/ExtraSection/ExtraSection";
import ExtraSection2 from "../../component/ExtraSection/ExtraSection2";

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <CarItemList></CarItemList>
               <ExtraSection></ExtraSection>
               <ExtraSection2></ExtraSection2>
          </div>
     );
};

export default Home;