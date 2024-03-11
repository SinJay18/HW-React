import "./App.css";

interface IPost {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: string;
  title: string;
  author: string;
}

const posts: IPost[] = [
  {
    id: 1,
    image:
      "https://www.breatheazy.co.uk/wp-content/uploads/2023/09/Untitled-design-35-1080x675.png",
    text: "Lorem ipsum 1",
    date: "15.05.2023",
    lesson_num: "Lesson 1",
    title: "Some title 1",
    author: "Some author 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/cute-kitten-sitting-outdoors-looking-at-camera-surrounded-by-snow-generated-by-artificial-intelligence_188544-84910.jpg?size=626&ext=jpg&ga=GA1.1.1292351815.1710165600&semt=ais",
    text: "Lorem ipsum 2",
    date: "01.02.2024",
    lesson_num: "Lesson 2",
    title: "Some title 2",
    author: "Some author 2",
  },
  {
    id: 3,
    image:
      "https://cn22.nevsedoma.com.ua/p/25/2583/105_files/231781_1_nevsedoma_com_ua.jpg",
    text: "Lorem ipsum 3",
    date: "07.03.2024",
    lesson_num: "Lesson 3",
    title: "Some title 3",
    author: "Some author 3",
  },
];

function App() {
  return (
    <div className="posts_container">
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <img src={post.image} alt="" />
            <p className="text">{post.text}</p>
            <span className="date">{post.date}</span>
            <p className="lesson_num">{post.lesson_num}</p>
            <p className="author">{post.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
