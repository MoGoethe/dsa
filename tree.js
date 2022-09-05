const treeData = {
  id: 1,
  children: [
    { id: 2 },
    {
      id: 3,
      children: [{ id: 5 }, { id: 6 }, { id: 7 }],
    },
    {
      id: 4,
      children: [
        { id: 8 },
        { id: 9 },
        { id: 10 },
        {
          id: 11,
          children: [
            { id: 12 },
            { id: 13 },
            { id: 14, children: [{ id: 15 }] },
          ],
        },
      ],
    },
    { id: 4 },
  ],
};

class TeeTraverse {
  tree = null;
  constructor(tree) {
    this.tree = tree;
  }
  // 深度优先
  deepFirstTraverse(cb) {
    this._deepFirstTraverse(this.tree, cb);
  }
  _deepFirstTraverse(node, cb) {
    const { children = [] } = node;
    for (let i = 0; i < children.length; i++) {
      cb(children[i]);
      if (children[i].children) {
        this._deepFirstTraverse(children[i], cb);
      }
    }
  }

  // 广度优先
  extenedFirstTraverse(cb) {
    this._extenedFirstTraverse(this.tree, cb);
  }
  _extenedFirstTraverse(node, cb) {
    let temp = [node];
    for (let i = 0; i < temp.length; i++) {
      cb(temp[i]);
      if (temp[i].children) {
        temp.push(...temp[i].children);
      }
    }
  }

  getMaxDeep1() {
    if (!this.tree) {
      return 0;
    }
    return this._getMaxDeep1([this.tree]);
  }
  _getMaxDeep1(children) {
    let deep = 1;
    let temp = [];
    for (let i = 0; i < children.length; i++) {
      if (children[i].children) {
        temp.push(...children[i].children);
      }
      if (i + 1 === children.length && temp.length > 0) {
        deep++;
        i = 0;
        children = temp;
        temp = [];
      }
    }
    return deep;
  }
  getMaxDeep2() {
    return this._getMaxDeep2([this.tree]);
  }
  _getMaxDeep2(children) {
    let deep = 0;
    for (let i = 0; i < children.length; i++) {
      if (children[i].children) {
        deep = this._getMaxDeep2(children[i].children) + 1;
      } else {
        deep = Math.max(deep, 1);
      }
    }
    return deep;
  }
}

const printNode = (data) => console.log(data.id);

const tree = new TeeTraverse(treeData);
tree.deepFirstTraverse(printNode);
console.log('----------------------');
tree.extenedFirstTraverse(printNode);
console.log('----------------------');
console.log(tree.getMaxDeep2());
console.log('----------------------');
console.log(tree.getMaxDeep1());
