## 前期准备

### 版本
需要Oracle DB Version >= 11.2， 太早的版本没有测试过，最早可以试试10.2， 10.1和之前的版本就不要试了。

### 用户、权限

```
create user <user_name> identified by ******* default tablespace sysaux;
grant connect,resource,oem_monitor to <username>;

```

### 程序分配执行权限

```
chmod 751 <orclt_name>
```

## 运行说明

```
./<orclt_name>
```

程序是TUI，但是支持鼠标点击，所以如果不习惯用键盘进行切换、选择，建议使用鼠标。

![tutorial](./render1741767850341.gif)

这是使用起来的样子，可以不用鼠标，但是有鼠标会方便很多。 看着像按钮的地方，就可以用鼠标去点。

因为手头没有Oracle DB的环境，后续的使用视频，等我有空了再补充。