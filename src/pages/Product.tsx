import React from 'react';
import { Button, List, Rate } from 'antd';
import data from "../assets/file.json";
import bikeone from "../assets/image/bikeone.jpg";
import biketwo from "../assets/image/biketwo.jpg";
import bikethree from "../assets/image/bikethree.jpg";
import bikefour from "../assets/image/bikefour.jpg";
import bikefive from "../assets/image/bikefive.jpg";
import bikesix from "../assets/image/bikesix.jpg";
import { useItem } from '../context/Context';

interface Rating {
  averageRating: number;
  numberOfReviews: number;
}

interface Item {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  rating: Rating;
}

interface Data {
  status: string;
  data: Item[];
}

const imageMap: { [key: string]: string } = {
  "bikeone.jpg": bikeone,
  "biketwo.jpg": biketwo,
  "bikethree.jpg": bikethree,
  "bikefour.jpg": bikefour,
  "bikefive.jpg": bikefive,
  "bikesix.jpg": bikesix,
};

const App: React.FC = () => {
  const initialData: Data = data as Data;
  const { setSelectedItem, addToCart } = useItem();
  const [selectedItem, setLocalSelectedItem] = React.useState<Item>(initialData.data[0]);

  const handleItem = (item: Item) => {
    setLocalSelectedItem(item);
  };

  const handleBuyNow = () => {
    setSelectedItem(selectedItem);
    addToCart(selectedItem);
  };

  const imageSrc = imageMap[selectedItem.image.split('/').pop() || ""];

  return (
    <div className="p-4 flex flex-col sm:flex-row">
      <div className='sm:w-[40rem] sm:ml-[8rem] mt-14'>
        <img src={imageSrc} alt={selectedItem.name} className="w-[30rem] h-[20rem] rounded-md" />
        <p className="mt-2">{selectedItem.desc}</p>

        <Button type="primary" className="bg-gray-500 mt-4 rounded-xl" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </div>
      <div className='sm:w-[30rem] border rounded-md px-5 sm:ml-3 overflow-y-auto mt-3 h-[30rem] sm:h-[25rem]'>
        <List
          className="cursor-pointer"
          itemLayout="vertical"
          dataSource={initialData.data}
          renderItem={(item: Item) => (
            <List.Item key={item.id} onClick={() => handleItem(item)}>
              <List.Item.Meta
                title={<a href="#">{item.name}</a>}
              />
              <div className="mt-2 flex">
                <div className="text-lg font-semibold">{item.price}</div>
                <div className="mt-2 flex items-center">
                  <Rate disabled defaultValue={item.rating.averageRating} />
                  <span className="ml-2">({item.rating.numberOfReviews} reviews)</span>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default App;
