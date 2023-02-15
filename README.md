# @mac-applications/iterm

**用于获取 Iterm 软件的偏好设置信息**

- 良好的偏好类型声明
- 使用 ESModule和CommonJS 模块方式

## 安装

```shell
npm i @mac-applications/iterm -S
```

## 使用方法

```typescript
import iterm from '@mac-applications/iterm';

const preferences = await iterm.getPreferences();
console.log(preferences);
```