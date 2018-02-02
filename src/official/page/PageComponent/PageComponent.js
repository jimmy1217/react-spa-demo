import React, { Component } from 'react';
import { InputText, Autocomplete } from 'components';

const PageComponent = () => {
    return (
        <section className="defaultpd">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="tz0 text-green fw-900 ls-2">Custom Components</h1>
                        <p className="p ls-2 text-grey mb-30">嘗試刻各種自己想使用的元件，重造輪子是為了基本底子</p>
                        <h2 className="h2 text-grey ls-2">AutoComplete
                            <small className="ml-10 text-green ls-1">輸入框自動完成</small>
                        </h2>
                        <hr />
                        <div className="row">
                            <div className="col-xs-12">
                                <h5 className="h5 ls-2 text-grey">Data Format</h5>
                                <pre className="text-left fw-400">
                                    {`{
    test1: { name: "apple", fruit: "蘋果" },
    test2: { name: "banana", fruit: "香蕉" },
    test3: { name: "orange", fruit: "橘子" },
    test4: { name: "tomato", fruit: "番茄" },
    test5: { name: "strawberry", fruit: "草莓" },
    test6: { name: "wax apple", fruit: "蓮霧" },
    test7: { name: "blueberry", fruit: "藍莓" },
    test7: { name: "mango", fruit: "芒果" }
}`
                                    }
                                </pre>
                            </div>
                            <div className="col-xs-12 col-md-6 mt-40">
                                <h5 className="ls-2 text-grey">Set Value</h5>
                                <Autocomplete
                                    placeholder="搜尋 'app'、'bana'... "
                                />
                            </div>
                            <div className="col-xs-12 col-md-6 mt-40">
                                <h5 className="ls-2 text-grey">Callback Value</h5>
                                <Autocomplete
                                    setValue={false}
                                    placeholder="選完後不帶入keyword，output key id"
                                    onChange={(val) => { alert(`selected key is ${val}`) }}
                                />
                            </div>
                            <div className="col-xs-12 col-md-6 mt-40">
                                <h5 className="ls-2 text-grey">Custom Search Key</h5>
                                <Autocomplete
                                    setValue={true}
                                    placeholder="查詢蘋果、香蕉..."
                                    filterKey="fruit"
                                />
                            </div>
                            <div className="col-xs-12 col-md-6 mt-40">
                                <h5 className="ls-2 text-grey">Custom Output Value</h5>
                                <Autocomplete
                                    placeholder="搜尋 '芒果' , 帶出 'mango'"
                                    filterKey="fruit"
                                    keys="name"
                                    onChange={(val) => { alert(`output value is ${val}`) }}
                                />
                            </div>
                            <div className="col-xs-12 col-md-6 mt-40">
                                <h5 className="ls-2 text-grey">Auto Focus</h5>
                                <Autocomplete
                                    placeholder="可設autoFocus={true},此處不設置,怕畫面自動foucs他"
                                    autoFocus={false}
                                />
                            </div>
                            <div className="col-xs-12 col-md-6 mt-40">
                                <h5 className="ls-2 text-grey">No Result</h5>
                                <Autocomplete
                                    emptyText="這樣查不到資料,自己定義找不到資料的顯示方式"
                                    placeholder="打個'z' "
                                />
                            </div>
                        </div>

                        <h2 className="mt-100 h2 text-grey ls-2">Input Text</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Button</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Radio</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Checkbox</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Card</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Tabs</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Tooltips</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Menu</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Collapse</h2>
                        <hr />

                        <h2 className="mt-100 h2 text-grey ls-2">Modal</h2>
                        <hr />


                        {/*<h2 className="mt-100 h2 text-grey ls-2">VideoController</h2>
                        <hr />*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageComponent;