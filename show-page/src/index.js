import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  PageHeader, Media, Panel, ListGroup, ListGroupItem, Label, ButtonToolbar,
  Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form,
  Pagination, ButtonGroup, Grid, Row, Col, Tabs, Tab
} from 'react-bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var series_name = 'React从入门到摔门';
document.title = series_name;

function get_creator(series_name) {
  var str = '但愿浓密';
  return str;
}
var creator = get_creator(series_name);

function get_time(series_name) {
  var str = '2017/12/23 23:51';
  return str;
}
var time = get_time(series_name);

function get_stars(series_name) {
  var stars = 4.9;
  return stars;
}
var stars = get_stars(series_name);

const big = (
  <div>
    <Form inline>
      <PageHeader>{series_name}
        <small><Label>{stars}</Label></small>
        <small><h4>{creator + "  " + time}</h4></small>
      </PageHeader>
    </Form>
  </div>
);
ReactDOM.render(
  big,
  document.getElementById('title')
);

function get_dictription(series_name) {
  var str = (<div><p>0(:3 )～ =͟͟͞͞('､3)_ヽ)＿ 今天上班累到灵魂出窍</p>
    <p>_(:3 」∠)_ 到家一直这样，不想动</p>
    <p>_(:3 ⌒ﾞ)_ 挠挠</p>
    <p>_(:3 」∠)_ 得起来洗衣服</p>
    <p>_( '-' _)⌒)_ 试图起来</p>
    <p>ヾ(⌒(_´-ㅅ-`)_ 算了</p></div>);
  return str;
}
var dictription = get_dictription(series_name);

const panelsInstance = (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={12}>
          <Panel header="简介">
            {dictription}
          </Panel>
        </Col>
      </Row>
    </Grid>
  </div>
);

ReactDOM.render(panelsInstance, document.getElementById('intro'));

function get_content(series_name) {
  var arr = [[
    ["React 入门实例教程",
      "http://www.ruanyifeng.com/blog/2015/03/react.html"],
    [], []],
    [["React-Bootstrap:组件",
      "http://react-bootstrap.cn/components.html"],
      ["Components·Bootstrap","https://getbootstrap.com/docs/3.3/components/"], []],
    [["使用ES6语法重构React组件",
      "https://www.cnblogs.com/yongjz/p/5356914.html"],
      [], []],
    [[], [], []]];
  return arr;
}
var content = get_content(series_name);

const tabsInstance = (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={12}>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="基础">
            <ListGroup>
              {
                content[0].map(function (currentValue) {
                  let x = (<ListGroupItem
                    target="_blank"
                    href={currentValue[1]}>{currentValue[0]}</ListGroupItem>);
                  return x;
                })
              }
            </ListGroup>
          </Tab>
          <Tab eventKey={2} title="进阶">
            <ListGroup>
              {
                content[1].map(function (currentValue) {
                  let x = (<ListGroupItem
                    target="_blank"
                    href={currentValue[1]}>{currentValue[0]}</ListGroupItem>);
                  return x;
                })
              }
            </ListGroup>
          </Tab>
          <Tab eventKey={3} title="高级">
            <ListGroup>
              {
                content[2].map(function (currentValue) {
                  let x = (<ListGroupItem
                    target="_blank"
                    href={currentValue[1]}>{currentValue[0]}</ListGroupItem>);
                  return x;
                })
              }
            </ListGroup>
          </Tab>
          <Tab eventKey={4} title="拓展" disabled>
            <ListGroup>
              {
                content[3].map(function (currentValue) {
                  let x = (<ListGroupItem
                    target="_blank"
                    href={currentValue[1]}>{currentValue[0]}</ListGroupItem>);
                  return x;
                })
              }
            </ListGroup>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </Grid>
);

ReactDOM.render(tabsInstance, document.getElementById('main'));

var star_num = 776;
var thumb_num = 776;

class StarButton extends Component {
  constructor() {
    super();
    this.state = {active: false};
  }

  render() {
    return (
      <Button bsStyle="primary" onClick={this.handleClick.bind(this)} block>
        {(this.state.active ? '☆UNSTAR' : '★STAR') + '(' + star_num + ')'}
      </Button>
    );
  }

  handleClick() {
    let active = this.state.active;
    star_num += active ? -1 : 1;
    this.setState({active: !active});
  }
}

class ThumbButton extends Component {
  constructor() {
    super();
    this.state = {active: false};
  }

  render() {
    return (
      <Button bsStyle="info" onClick={this.handleClick.bind(this)} block>
        {(this.state.active ? '♡UNTHUMB' : '❤THUMB') + '(' + thumb_num + ')'}
      </Button>
    );
  }

  handleClick() {
    let active = this.state.active;
    this.setState({active: !active});
    thumb_num += active ? -1 : 1;
  }
}

var score = 0;

class Score extends Component {
  constructor() {
    super();
    this.state = {activePage: score};
  }

  render() {
    return (
      <Pagination className="Pagination-score"
                  bsSize="large"
                  items={5}
                  activePage={this.state.activePage}
                  onSelect={this.handleSelect.bind(this)} block/>
    );
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    score = eventKey;
  }
}

const wellStyles = {maxWidth: 260, margin: '0 auto 10px'};

const THUMB_STAR = (
  <div className="well" style={wellStyles}>
    <ButtonGroup vertical block>
      <Score/>
      < ThumbButton/>
      < StarButton/>
    </ButtonGroup>
  </div >
);

ReactDOM.render(THUMB_STAR, document.getElementById('starit'));

function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const formInstance = (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={12}>
          <form>
            <Panel header="发表评论" bsStyle="info">
              <FieldGroup
                id="formControlsEmail"
                type="title"
                label="标题"
                placeholder="请输入标题"
              />
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>正文</ControlLabel>
                <FormControl componentClass="textarea" placeholder="请输入正文"/>
              </FormGroup>
              <Button type="submit">
                提交
              </Button>
            </Panel>
          </form>
        </Col>
      </Row>
    </Grid>
  )
;
ReactDOM.render(formInstance, document.getElementById('givcomments'));

function get_comments(series_name) {
  var arr = [["MilkyW", "2017/12/20 12:20", "炒鸡棒", "(╬▔皿▔)"],
    ["kaclarpt", "2017/12/20 15:37", "厉害惹", "(~￣▽￣)~"],
    ["liueo", "2017/12/21 16:25", "肥肠好", "≡(▔﹏▔)≡"],
    ["Atorios", "2017/12/22 09:19", "666", "ㄟ( ▔, ▔ )ㄏ ",]];
  return arr;
};

var commentsss = get_comments(series_name);

var com_sum = 0;

const mediaAlignmentInstance = (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={12}>
          <Panel header="评论" bsStyle="primary">
            <ListGroup fill>
              {
                commentsss.map(function (currentValue) {
                  /* if (currentValue[4] && typeof(currentValue[4]) != "undefined" && currentValue[4] != 0) {
                   }*/
                  com_sum = com_sum + 1;
                  let x = (
                    <ListGroupItem>
                      <Media>
                        <Media.Left>
                          <img width={64} height={64} src={"./assets/" + currentValue[0] + ".jpg"} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                          <Media.Heading>{currentValue[2]}
                            <small>{'\t' + currentValue[1]}</small>
                          </Media.Heading>
                          <p>{currentValue[3]}</p>
                        </Media.Body>
                      </Media>
                    </ListGroupItem>);
                  return x;
                })
              }
            </ListGroup>
          </Panel>
        </Col>
      </Row>
    </Grid>
  </div>
);
ReactDOM.render(mediaAlignmentInstance, document.getElementById('comments'));
