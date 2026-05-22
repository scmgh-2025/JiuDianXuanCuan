# 复制所有需要的图片文件
$images = @(
    "酒店智能体.jpg",
    "餐饮智能体.jpg",
    "个人智能体.png",
    "huangxiaoxi-app.png",
    "04.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "06.jpg",
    "gyl.png",
    "04.png"
)

foreach ($image in $images) {
    Write-Host "正在复制 $image..."
    git show master:public/$image > public/$image
}

Write-Host "所有图片复制完成！"
