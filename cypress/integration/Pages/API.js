class apis{
    static deptquery1 = 'get_agency_list_with_fiscal_year'
    static deptquery2 = 'get_overall_departments_info_updated'
    static deptquery3 = 'department_overlay_details'
    static deptquery4 = 'get_department_fiscal_year'
    static deptquery5 = 'get_department_list'
    static deptquery6 = 'get_department_table_details'
    static deptquery7 = 'get_department_tile_details'

    static deptbodytextprefix1 = '{"elasticQueryName":"get_agency_list_with_fiscal_year","filters":[],"filter":[],"dynamicColumns":[{"columnName":"{#fiscal_year}","columnValue":['
    static deptbodytextsuffix1 = ']},{"columnName":"{#org}","columnValue":["'
    static deptbodytextsuffix2 =  '"]}]}'
    static deptbodytext2 = '{"elasticQueryName":"get_overall_departments_info_updated","filters":[],"filter":[],"dynamicColumns":[{"columnName":"{#fiscal_year}","columnValue":[2020]},{"columnName":"{#org}","columnValue":["Board of County Commissioners"]}]}'
    static deptbodytext3 = '{"elasticQueryName":"department_overlay_details","filters":[],"filter":[],"dynamicColumns":[{"columnName":"{#fiscal_year}","columnValue":[2020]},{"columnName":"{#org}","columnValue":["Board of County Commissioners"]},{"columnName":"{#vendor_year}","columnValue":[2020]},{"columnName":"{#category_year}","columnValue":[2020]},{"columnName":"{#year}","columnValue":[2020]},{"columnName":"{#dept_id}","columnValue":["431130"]}]}'
    static deptbodytext4 = '{"elasticQueryName":"get_department_fiscal_year","filters":[],"filter":[],"dynamicColumns":[{"columnName":"{#dept_id}","columnValue":["431130"]},{"columnName":"{#year}","columnValue":[2020]}]}'
    static deptbodytext5 = '{"elasticQueryName":"get_department_list","filters":[],"filter":[],"dynamicColumns":[{"columnName":"{#dept_id}","columnValue":["431130"]},{"columnName":"{#year}","columnValue":[2020]}]}'
    static deptbodytext6 = '{"elasticQueryName":"get_department_table_details","filters":[],"filter":[],"dynamicColumns":[{"columnName":"{#dept_id}","columnValue":["431130"]},{"columnName":"{#year}","columnValue":[2020]},{"columnName":"{#alphafilter}","columnValue":["A"]}]}'
    static deptbodytext7 = '{"elasticQueryName":"get_department_tile_details","filters":[],"filter":[],"dynamicColumns":[{"columnName":"{#dept_id}","columnValue":["431130"]},{"columnName":"{#year}","columnValue":[2020]},{"columnName":"{#alphafilter}","columnValue":["A"]}]}'
    
}
export default apis