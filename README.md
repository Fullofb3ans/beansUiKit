# beansUiKit

## О Библиотеке || About

Библиотека унифицированных компонентов под всевозможные(в будущем) формы. Планирую развивать компоненты исходя из своих рабочих задач.
Сейчас наиболее функциональный - BaseSelect, последовательно буду доделывать и остальные.  

### Доступные компоненты || Components

#### 1. BaseSelect.vue
Максимально унифицированный настраиваемый компонент выпадающего списка с поддержкой динамической передачи различных пропсов, направленный на закрытие любых нюансов. Генерирует событие `valueChanged` при изменении выбора.

**Пропсы || Props**:
- `propsClass` (String, default: 'select') - CSS класс для компонента, по умолчанию передается также следующим элементам: 
${propsClass}__wrapper - для обертки над всем компонентом, ${propsClass}__inner - только для селекта и его иконки
- `propsLabel` (String) - Текст лейбла для выпадающего списка, принимает класс - ${propsClass}__label
- `propsValue` (String|Number) - Текущее значение списка
- `propsOptions` (Array<unknown>, default: []) - Массив значений для выпадающего списка, передается либо массивом строк, либо объектом элементов с ключом "value", класс - ${propsClass}__option
- `markedOptions` (Array<unknown>, default: []) - Массив значений в выпадающем списке, при совпадении элемента с элементом propsOptions - принимается класс ${propsClass}__option--marked
- `propsPlaceholder` (String) - Текст первого option в выпадающем списке, по умолчанию со значением disabled, принимает ${propsClass}__placeholder
- `disabled` (Boolean, default: false) - Отключает выпадающий список, список принимает класс ${propsClass}__wrapper--disabled
- `error` (String) - Текст ошибки, при передаче рендерится блок ${propsClass}__error__wrapper, где внутри ${propsClass}__error

**Слоты || Slots**:
Есть несколько слотов внутри: 
- `label-icon` - для иконки лейбла
- `select-icon` - для иконки внутри выпадающего списка
- `error-icon` - для иконки у текста ошибки

**События || Events**:
- `valueChanged` - @change обработка - emit('valueChanged', selectValue.value)

**Пример || Example**:
```typescript
<BaseSelect :propsClass="'select'"
            :propsLabel="'selectLabel'"
            :propsOptions="['test1', 'test2']"
            :markedOptions="['test1']"
            :error="'testError'"
            :disabled="true"
            :propsPlaceholder="'Выберите значение'"
            @valueChanged="console.log('testEmit')">

    <template v-slot:label-icon> </template>
    <template v-slot:select-icon> </template>
    <template v-slot:error-icon> </template>
</BaseSelect>
```

#### 2. BaseButton.vue
Компонент кнопки. Настраиваемый класс и заголовок.

**Пропсы || Props**:
- `propsClass` (String, default: 'button') - класс для кнопки 
- `propsLabel` (String) - текст лейбла над кнопкой

**Слоты || Slots**:
Внутри кнопки один slot, можно использовать под текст и иконку

**События || Events**:
- `clicked` - @click обработка - $emit('clicked')

**Пример || Example**:
```typescript
<BaseButton :propsLabel="'label'"
            :propsClass="'button'"
            @clicked="console.log('clicked')">
    testTitle
</BaseButton>
```

## Использование || Usage
```typescript
import BaseButton from 'beans-ui-kit';
import BaseSelect from 'beans-ui-kit';

// Или
import { BaseButton, BaseSelect } from 'beans-ui-kit';
