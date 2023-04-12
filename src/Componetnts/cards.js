import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function cards() {
  return (
    <CardGroup>
      <Card className=' '>
        <Card.Img variant="top" src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/326784852_5844659698952916_2833834783134163732_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6RsKb9i_Ke4AX-kTo0X&_nc_ht=scontent.ftun2-2.fna&oh=00_AfBDLkflT3Fvv3VZ1mXyGq8EKkj7-5xM6CFAxNlF99p4Xg&oe=6439B026" />
        <Card.Body>
          <Card.Title>GOmycode student</Card.Title>
          <Card.Text>
           i already finish my first journey and got my certficate.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/338907956_1491037194759788_952073909938594065_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qu-6W62c4i8AX9o9d8h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRAFm6QRRxohk5ZKJRqmidwBn8scndYhEmydcflEiZ7Iw&oe=645B80CF" />
        <Card.Body>
          <Card.Title>my other certficate</Card.Title>
          <Card.Text>
            i have experience in fix phones hardware and software.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/339697317_750007406842104_348606113394944224_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=KKVVnQQE9TsAX87U5ZA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQLAFRVrexwsDiT7lmIRmWLeN2shu18RJqYZq3KVkmlbw&oe=645B4C25" />
        <Card.Body>
          <Card.Title>my first website</Card.Title>
          <Card.Text>
           my first webiste after i learn html,css,javascript.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default cards;