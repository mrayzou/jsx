import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
function End() {
  return (
    <Card className="text-center">
      <Card.Header>Quote for today</Card.Header>
      <Card.Body>
        <Card.Title>Christopher Dayagdag</Card.Title>
        <Card.Text>
        “We don't just build websites, we build websites that SELLS”
        </Card.Text>
       </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default End;