# react-native-basic-study
RN基础学习

## 使用

- emulator @pc-avd 启动虚拟机

- react-native run-android  运行项目

## 注意事项

因使用了自定义图标，所以在`npm install`完之后需要在`react-native-vector-icons`包下进行配置

1. 将`*.ttf`文件复制到`\node_modules\react-native-vector-icons\Fonts`和`android/app/src/main/assets/fonts`下

2. 在`\node_modules\react-native-vector-icons\glyphmaps`下创建json文件：

    ```javascript
      // 文件格式：图标名(Font Class Name): Unicode(16进制)转10进制
      {
        "icon-discount": 58945,
        "icon-play": 58944,
        "icon-time": 58936,
        "icon-credits": 58937,
        "icon-renew": 58938,
        "icon-order": 58939,
        "icon-search": 58940,
        "icon-link": 58942,
        "icon-setting": 58943
      }
    ```

    自动转换生成键值对文件工具：[参考文档链接](https://www.cnblogs.com/ImaY/p/9090311.html)

3. 在`\node_modules\react-native-vector-icons`下建立`*.js`文件:

    ```javascript
      import createIconSet from './lib/create-icon-set';
      import glyphMap from './glyphmaps/CustomIcon.json'; // 导入自定义json文件

      const iconSet = createIconSet(glyphMap, 'CustomIcon', 'CustomIcon.ttf');  // 自定义图标文件名

      export default iconSet;
      export const Button = iconSet.Button;
      export const TabBarItem = iconSet.TabBarItem;
      export const TabBarItemIOS = iconSet.TabBarItemIOS;
      export const ToolbarAndroid = iconSet.ToolbarAndroid;
      export const getImageSource = iconSet.getImageSource;
    ```
