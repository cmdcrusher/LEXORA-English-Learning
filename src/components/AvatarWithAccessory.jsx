export default function AvatarWithAccessory({ avatarUrl, accessory, size = 48 }) {
    return (
        <div
            className="relative shrink-0"
            style={{ width: size, height: size }}
        >
            <div className="w-full h-full rounded-full overflow-hidden bg-violet-100">
                {avatarUrl ? (
                    <img src={avatarUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-violet-400 font-bold">?</div>
                )}
            </div>

            {accessory?.icon_url && accessory?.position && (
                <img
                    src={accessory.icon_url}
                    alt=""
                    className="absolute pointer-events-none select-none max-w-none"
                    style={{
                        top: accessory.position.top,
                        left: accessory.position.left,
                        // width теперь в % от size — одинаково выглядит в любом контексте
                        width: `${parseFloat(accessory.position.width)}%`,
                        transform: accessory.position.transform,
                    }}
                />
            )}
        </div>
    );
}