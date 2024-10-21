## Oracle DPA-Lite

DPA 全称Database Performance Analysis， 这是早几年做的一款产品，当时我们基于Zabbix V3做了一款IT监控解决方案， 考虑仅仅是一些Oracle数据库指标的采集、展示，并不能很好解决两个常见问题：

1. 当前Oracle数据库有什么问题？ —— 这时候可能用户已经抱怨系统访问缓慢了，需要迅速定位问题
2. 数据库之前某个时间段（可能是1天前的早上10点左右），访问特别慢，出了什么问题？

DPA-Lite 是一个部署在Tomcat上的Java Web App，前端使用Angular 1，能够很好的解决前面提及的两个问题。

## Docker 容器版

这个工具单独部署使用，在很多客户现场都起到了很好的作用，为解决Java Web App部署的麻烦，我们制作了docker image并且推送到了docker hub。

## 下载镜像

```
docker pull alariv/oracle-dpa
```

## 运行

```
docker run -d -p <your_local_port>:8080 \
     -v <local_path_absolute_or_named_volume>:/ConfigDir/:ro
    oracle-dpa:latest

```

通过 Http://IP:Port/RmsPlus 访问系统。 对于能够管理或者说连接的Oracle数据库，通过配置文件的方式提供（应该在启动运行之前就把配置文件准备好）， 为每一个数据库连接，准备一个配置文件（以.cfg结尾的文件，且放在 <local_path_absolute_or_named_volume> ).
示例：

```
[rmsora]
db_url: //192.168.0.196:1521/pdb1
username: c##perfstat
password: perfstatdb
role: normal
# for ASM instance role should be SYSDBA

hostname: TEST
visible_name: TEST
dbid:

```

### 连接数据库用户所需权限

我一般习惯使用staspack的perfstat用户来做这件事情：

```
SQL> @?/rdbms/admin/spcreate.sql
SQL> 
grant create session to perfstat;
grant select any dictionary to perfstat;
grant oem_monitor to perfstat;
grant advisor to perfstat;
grant execute on dbms_workload_repository to perfstat;


```

### 不能直接连接Oracle数据库的情况

有时候，使用这个DPA-Lite直接连接Oracle数据库不可行，可以将需要分析的数据库的AWR数据导出，再导入到本地Oracle数据库，这样使用DPA连接本地数据库即可，这种情况下，配置文件里要填写dbid属性为导出数据的数据库dbid。

* Export AWR @?/rdbms/admin/awrextr.sql
* Import AWR @?/rdbms/admin/awrload.sql