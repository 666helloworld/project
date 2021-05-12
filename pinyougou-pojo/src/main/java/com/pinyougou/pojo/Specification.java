package com.pinyougou.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * 品牌规格组合类
 */
public class Specification implements Serializable {
    private TbSpecification specification;
    private List<TbSpecificationOption> specificationOption;

    public Specification(TbSpecification specification, List<TbSpecificationOption> specificationOption) {
        super();
        this.specification = specification;
        this.specificationOption = specificationOption;
    }

    public Specification(){}

    public TbSpecification getSpecification() {
        return specification;
    }

    public void setSpecification(TbSpecification specification) {
        this.specification = specification;
    }

    public List<TbSpecificationOption> getSpecificationOption() {
        return specificationOption;
    }

    public void setSpecificationOption(List<TbSpecificationOption> specificationOption) {
        this.specificationOption = specificationOption;
    }
}
