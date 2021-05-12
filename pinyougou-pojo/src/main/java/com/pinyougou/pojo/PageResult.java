package com.pinyougou.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * @author tchen
 * 返回带页码信息的对象数据
 */
public class PageResult implements Serializable {
    /**总数*/
    private long total;
    /**当前页信息*/
    private List rows;

    public PageResult(long total,List rows){
        super();
        this.total = total;
        this.rows = rows;
    }

    public PageResult(){}

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List getRows() {
        return rows;
    }

    public void setRows(List rows) {
        this.rows = rows;
    }
}
