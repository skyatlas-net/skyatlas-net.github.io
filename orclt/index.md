## orclt 是什么？

orclt是我们Oracle DBA团队在工作中使用的一个TUI（CLI）工具，在终端（Terminal）字符界面下运行，能够查看Oracle数据库的Session，Tablespace，Parameters，History Load等信息。不会修改数据库，不是SQL workspace。

## 何为TUI、CLI，为什么现在还要TUI工具？

TUI： Text User Interface； CLI： Command Line Interface
程序运行在终端Terminal中，输出只有ASCII字符，接受键盘和 **鼠标** 操作。
**为什么** 还需要TUI？ 现在安全性要求越来越高，我们维护的生产环境往往都被隔离在堡垒机（JumpServer）之后，不能通过自己的电脑连接，堡垒机一般来说会提供SSH连接工具（Windows可能是RDP远程桌面工具），所能做的操作是受限制的，如果我们有一款工具，不需要外部网络连接，不需要GUI，在服务器上的命令行里运行，会很好的帮助我们进行常规维护操作。这就是orclt 作为TUI工具产生的由来……

## 我们设想的orclt使用场景。

提前将orclt程序copy到服务器上（各平台的orclt程序都是单文件的可执行程序）。如果是Linux/Unix类服务器，以后通过JumpServer提供的SSH Client工具，在命令行中，通过orclt你可以：

* 查看连接的Oracle数据库的概况；
* 当前Active Session（如果有锁或其他堵塞情况，会以Tree形式显示堵塞关系）；
* 单个session，可以进一步查看其执行的SQL文本、SQL的执行计划；
* 查看表空间数据文件使用情况、FRA空间使用情况
* 查看数据库非默认参数
* 查看数据库Metric值
* 查看数据库Performance History Load
* 当前Active Transaction
* 密码将要过期的用户
* Oracle SGA区域的使用明细
* RMAN备份记录
* Jobs 和 Schedulers
* 还提供了一个简化版的SCHEMA查看器（表、索引、视图、Sequence、MView等都是支持的）
  
虽然是命令行程序，仍然设想你使用鼠标（支持鼠标单击、双击选择，期望你使用的是超宽的终端）

## 权益申明

orclt工具由 **北京星图伟业信息技术有限公司** 发布，完全Free，对于使用或者二次分发不作限制，同时 **我们也不承担任何责任** 。发现问题或者有建议欢迎发邮件到 <hendry@skyatlas.net>， 邮件一般不会回复。

## Tutorial

[tutor.md](./tutor.md)

## 下载区

文件命名规则是 orclt_{OS-NAME}_{Arch-Name}，请注意选择.

### Aix

* [orclt_aix_ppc64](/orclt_aix_ppc64){target="_self"}

### Android

* [orclt_android_386](/orclt_android_386){target="_self"}
* [orclt_android_amd64](/orclt_android_amd64){target="_self"}
* [orclt_android_arm](/orclt_android_arm){target="_self"}
* [orclt_android_arm64](/orclt_android_arm64){target="_self"}

### MacOS Darwin

* [orclt_darwin_amd64](/orclt_darwin_amd64){target="_self"}
* [orclt_darwin_arm64](/orclt_darwin_arm64){target="_self"}

### Dragonfly | FreeBSD

* [orclt_dragonfly_amd64](/orclt_dragonfly_amd64){target="_self"}
* [orclt_freebsd_386](/orclt_freebsd_386){target="_self"}
* [orclt_freebsd_amd64](/orclt_freebsd_amd64){target="_self"}
* [orclt_freebsd_arm](/orclt_freebsd_arm){target="_self"}
* [orclt_freebsd_arm64](/orclt_freebsd_arm64){target="_self"}
* [orclt_freebsd_riscv64](/orclt_freebsd_riscv64){target="_self"}

### Illumos | OpenSolaris

* [orclt_illumos_amd64](/orclt_illumos_amd64){target="_self"}

### iOS

* [orclt_ios_amd64](/orclt_ios_amd64){target="_self"}
* [orclt_ios_arm64](/orclt_ios_arm64){target="_self"}

### Linux

* [orclt_linux_386](/orclt_linux_386){target="_self"}
* [orclt_linux_amd64](/orclt_linux_amd64){target="_self"}
* [orclt_linux_arm](/orclt_linux_arm){target="_self"}
* [orclt_linux_arm64](/orclt_linux_arm64){target="_self"}
* [orclt_linux_loong64](/orclt_linux_loong64){target="_self"}
* [orclt_linux_mips](/orclt_linux_mips){target="_self"}
* [orclt_linux_mips64](/orclt_linux_mips64){target="_self"}
* [orclt_linux_mips64le](/orclt_linux_mips64le){target="_self"}
* [orclt_linux_mipsle](/orclt_linux_mipsle){target="_self"}
* [orclt_linux_ppc64](/orclt_linux_ppc64){target="_self"}
* [orclt_linux_ppc64le](/orclt_linux_ppc64le){target="_self"}
* [orclt_linux_riscv64](/orclt_linux_riscv64){target="_self"}
* [orclt_linux_s390x](/orclt_linux_s390x){target="_self"}

### NetBSD

* [orclt_netbsd_386](/orclt_netbsd_386){target="_self"}
* [orclt_netbsd_amd64](/orclt_netbsd_amd64){target="_self"}
* [orclt_netbsd_arm](/orclt_netbsd_arm){target="_self"}
* [orclt_netbsd_arm64](/orclt_netbsd_arm64){target="_self"}

### OpenBSD

* [orclt_openbsd_386](/orclt_openbsd_386){target="_self"}
* [orclt_openbsd_amd64](/orclt_openbsd_amd64){target="_self"}
* [orclt_openbsd_arm](/orclt_openbsd_arm){target="_self"}
* [orclt_openbsd_arm64](/orclt_openbsd_arm64){target="_self"}

### Plan9

* [orclt_plan9_386](/orclt_plan9_386){target="_self"}
* [orclt_plan9_amd64](/orclt_plan9_amd64){target="_self"}
* [orclt_plan9_arm](/orclt_plan9_arm){target="_self"}

### Solaris

* [orclt_solaris_amd64](/orclt_solaris_amd64){target="_self"}

### Windows

* [orclt_windows_386](/orclt_windows_386){target="_self"}
* [orclt_windows_amd64](/orclt_windows_amd64){target="_self"}
* [orclt_windows_arm](/orclt_windows_arm){target="_self"}
* [orclt_windows_arm64](/orclt_windows_arm64){target="_self"}