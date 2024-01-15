import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode; //это функция, которая принимает элемент типа T и возвращает React-узел для отображения элемента. Она используется для рендеринга каждого элемента списка.
}

export default function List<T>(props: ListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    );
};

/* 
Компонент List экспортируется по умолчанию и принимает объект props, который соответствует типу ListProps<T>. Внутри компонента происходит следующее:
    - Возвращается корневой элемент <div>.
    - С помощью метода map для массива props.items вызывается функция props.renderItem для каждого элемента. Результаты вызова этой функции добавляются внутрь корневого элемента <div>.
Таким образом, компонент List отображает список элементов, используя функцию props.renderItem для рендеринга каждого элемента. 
*/